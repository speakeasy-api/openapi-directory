import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateVideoCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class CreateVideoCollectionResponse extends SpeakeasyBase {
    /**
     * Successfully created video collection
     */
    collectionCreateResponse?: shared.CollectionCreateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
