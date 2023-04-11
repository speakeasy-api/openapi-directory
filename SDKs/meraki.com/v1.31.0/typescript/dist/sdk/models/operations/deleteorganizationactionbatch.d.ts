import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationActionBatchRequest extends SpeakeasyBase {
    actionBatchId: string;
    organizationId: string;
}
export declare class DeleteOrganizationActionBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
