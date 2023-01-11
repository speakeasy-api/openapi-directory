import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTrackCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class CreateTrackCollectionRequest extends SpeakeasyBase {
    request: shared.CollectionCreateRequest;
    security: CreateTrackCollectionSecurity;
}
export declare class CreateTrackCollectionResponse extends SpeakeasyBase {
    collectionCreateResponse?: shared.CollectionCreateResponse;
    contentType: string;
    statusCode: number;
}
