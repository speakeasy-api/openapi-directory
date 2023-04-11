import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RenameTrackCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class RenameTrackCollectionRequest extends SpeakeasyBase {
    /**
     * Collection changes
     */
    collectionUpdateRequest: shared.CollectionUpdateRequest;
    /**
     * Collection ID
     */
    id: string;
}
export declare class RenameTrackCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
