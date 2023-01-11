import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCorporateByIdPathParams extends SpeakeasyBase {
    corporateId: number;
}
export declare class GetCorporateByIdRequest extends SpeakeasyBase {
    pathParams: GetCorporateByIdPathParams;
}
export declare class GetCorporateByIdResponse extends SpeakeasyBase {
    contentType: string;
    corporateAccount?: shared.CorporateAccount;
    statusCode: number;
}
