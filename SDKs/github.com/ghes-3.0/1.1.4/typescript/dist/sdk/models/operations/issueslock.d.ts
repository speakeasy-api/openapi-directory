import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:
 *
 * @remarks
 * \* `off-topic`
 * \* `too heated`
 * \* `resolved`
 * \* `spam`
 */
export declare enum IssuesLockRequestBodyLockReasonEnum {
    OffTopic = "off-topic",
    TooHeated = "too heated",
    Resolved = "resolved",
    Spam = "spam"
}
export declare class IssuesLockRequestBody extends SpeakeasyBase {
    /**
     * The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:
     *
     * @remarks
     * \* `off-topic`
     * \* `too heated`
     * \* `resolved`
     * \* `spam`
     */
    lockReason?: IssuesLockRequestBodyLockReasonEnum;
}
export declare class IssuesLockRequest extends SpeakeasyBase {
    requestBody?: IssuesLockRequestBody;
    /**
     * issue_number parameter
     */
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesLockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
