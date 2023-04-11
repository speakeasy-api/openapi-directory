import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteConfigRequest extends SpeakeasyBase {
    config: string;
    key: string;
    userToken?: string;
}
export declare enum DeleteConfigConfigDeleteResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum DeleteConfigConfigDeleteResponseMessageEnum {
    Success = "Success"
}
export declare class DeleteConfigConfigDeleteResponseResult extends SpeakeasyBase {
    deleted: number;
}
/**
 * Success
 */
export declare class DeleteConfigConfigDeleteResponse extends SpeakeasyBase {
    code: DeleteConfigConfigDeleteResponseCodeEnum;
    message: DeleteConfigConfigDeleteResponseMessageEnum;
    result: DeleteConfigConfigDeleteResponseResult;
}
export declare class DeleteConfigResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    /**
     * Success
     */
    configDeleteResponse?: DeleteConfigConfigDeleteResponse;
    contentType: string;
    /**
     * Not Found
     */
    notFoundResponse?: shared.NotFoundResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized Request
     */
    unauthorizedResponse?: shared.UnauthorizedResponse;
}
