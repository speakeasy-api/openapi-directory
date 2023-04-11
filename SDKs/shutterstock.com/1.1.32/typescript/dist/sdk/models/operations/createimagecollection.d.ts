import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImageCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class CreateImageCollectionResponse extends SpeakeasyBase {
    /**
     * Successfully created image collection
     */
    collectionCreateResponse?: shared.CollectionCreateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
