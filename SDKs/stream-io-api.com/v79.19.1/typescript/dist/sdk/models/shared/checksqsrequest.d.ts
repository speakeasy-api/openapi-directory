import { SpeakeasyBase } from "../../../internal/utils";
export declare class CheckSQSRequest extends SpeakeasyBase {
    /**
     * AWS SQS access key
     */
    sqsKey?: string;
    /**
     * AWS SQS key secret
     */
    sqsSecret?: string;
    /**
     * AWS SQS endpoint URL
     */
    sqsUrl?: string;
}
