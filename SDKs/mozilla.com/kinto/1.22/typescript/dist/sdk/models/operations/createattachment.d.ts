import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAttachmentRequest extends SpeakeasyBase {
    bucketId: string;
    collectionId: string;
    id: string;
}
export declare class CreateAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
