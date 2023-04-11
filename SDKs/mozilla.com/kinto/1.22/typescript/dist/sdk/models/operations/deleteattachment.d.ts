import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAttachmentRequest extends SpeakeasyBase {
    bucketId: string;
    collectionId: string;
    id: string;
}
export declare class DeleteAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
