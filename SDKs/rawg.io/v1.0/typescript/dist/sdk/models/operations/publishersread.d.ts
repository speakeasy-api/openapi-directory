import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishersReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this Publisher.
     */
    id: number;
}
export declare class PublishersReadResponse extends SpeakeasyBase {
    contentType: string;
    publisherSingle?: shared.PublisherSingle;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
