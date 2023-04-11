import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LicenseSFXResult } from "./licensesfxresult";
/**
 * List of information about licensed sound effects
 */
export declare class LicenseSFXResultDataList extends SpeakeasyBase {
    /**
     * Sound effects license results
     */
    data?: LicenseSFXResult[];
    /**
     * Error list; appears only if there was an error
     */
    errors?: ErrorT[];
    /**
     * Server-generated message, if any
     */
    message?: string;
}
