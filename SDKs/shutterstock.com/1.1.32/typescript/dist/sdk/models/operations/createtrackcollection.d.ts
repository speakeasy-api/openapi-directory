import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTrackCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class CreateTrackCollectionResponse extends SpeakeasyBase {
    /**
     * Successfully created audio collection
     */
    collectionCreateResponse?: shared.CollectionCreateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
