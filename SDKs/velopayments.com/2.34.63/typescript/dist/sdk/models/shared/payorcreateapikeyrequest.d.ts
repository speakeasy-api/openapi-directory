import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Name of role
 */
export declare enum PayorCreateApiKeyRequestRolesEnum {
    VeloPayorAdmin = "velo.payor.admin",
    VeloPayorSupport = "velo.payor.support"
}
/**
 * Details of application API key to create
 */
export declare class PayorCreateApiKeyRequest extends SpeakeasyBase {
    /**
     * Description of the key.
     */
    description?: string;
    /**
     * A name for the key.
     */
    name: string;
    /**
     * <p>A role to assign to the key.</p>
     *
     * @remarks
     * <p>If you want your API key to have write access then assign the role velo.payor.admin</p>
     * <p>A later version will change this property from a list to string</p>
     *
     */
    roles: PayorCreateApiKeyRequestRolesEnum[];
}
