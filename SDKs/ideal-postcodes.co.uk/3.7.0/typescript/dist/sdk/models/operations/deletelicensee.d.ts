import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteLicenseeRequest extends SpeakeasyBase {
    key: string;
    licensee: string;
    userToken?: string;
}
export declare enum DeleteLicenseeLicenseeDeleteResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum DeleteLicenseeLicenseeDeleteResponseMessageEnum {
    Success = "Success"
}
export declare class DeleteLicenseeLicenseeDeleteResponseResult extends SpeakeasyBase {
    deleted: number;
}
/**
 * Success
 */
export declare class DeleteLicenseeLicenseeDeleteResponse extends SpeakeasyBase {
    code: DeleteLicenseeLicenseeDeleteResponseCodeEnum;
    message: DeleteLicenseeLicenseeDeleteResponseMessageEnum;
    result: DeleteLicenseeLicenseeDeleteResponseResult;
}
export declare class DeleteLicenseeResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Success
     */
    licenseeDeleteResponse?: DeleteLicenseeLicenseeDeleteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
