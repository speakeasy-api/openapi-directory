import { SpeakeasyBase } from "../../../internal/utils";
/**
 * HTTP Ok, key created
 */
export declare class PayorBrandingResponse extends SpeakeasyBase {
    /**
     * How the payor has chosen to refer to payees
     */
    collectiveAlias?: string;
    /**
     * The payor’s 'Doing Business As' name
     */
    dbaName?: string;
    /**
     * <p>The URL to use for this payor’s logo</p>
     *
     * @remarks
     * <p>This will be an immutable system-generated URL</p>
     *
     */
    logoUrl: string;
    /**
     * The name of the payor
     */
    payorName: string;
    /**
     * The payor’s support contact address
     */
    supportContact?: string;
}
