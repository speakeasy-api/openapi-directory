import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteImageCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteImageCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class DeleteImageCollectionRequest extends SpeakeasyBase {
    pathParams: DeleteImageCollectionPathParams;
    security: DeleteImageCollectionSecurity;
}
export declare class DeleteImageCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
