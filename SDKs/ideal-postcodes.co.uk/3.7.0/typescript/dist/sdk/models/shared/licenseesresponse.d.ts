import { SpeakeasyBase } from "../../../internal/utils";
import { Licensee } from "./licensee";
export declare enum LicenseesResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum LicenseesResponseMessageEnum {
    Success = "Success"
}
/**
 * List of licensees
 */
export declare class LicenseesResponseResult extends SpeakeasyBase {
    /**
     * Returns true if there are more licensees listed after the maximum number of results as implied by `limit`
     */
    hasMore?: boolean;
    licensees?: Licensee[];
}
/**
 * Success
 */
export declare class LicenseesResponse extends SpeakeasyBase {
    code: LicenseesResponseCodeEnum;
    message: LicenseesResponseMessageEnum;
    /**
     * List of licensees
     */
    result: LicenseesResponseResult;
}
