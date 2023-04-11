import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the External Account.
 */
export declare enum UpdateAnExternalAccountParametersStatusEnum {
    Active = "active",
    Archived = "archived"
}
export declare class UpdateAnExternalAccountParameters extends SpeakeasyBase {
    /**
     * The description you choose to give the external account.
     */
    description?: string;
    /**
     * The status of the External Account.
     */
    status?: UpdateAnExternalAccountParametersStatusEnum;
}
