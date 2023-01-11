import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveDetailsAboutSpecificAspspPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveDetailsAboutSpecificAspspRequest extends SpeakeasyBase {
    pathParams: RetrieveDetailsAboutSpecificAspspPathParams;
}
export declare class RetrieveDetailsAboutSpecificAspspResponse extends SpeakeasyBase {
    aspsp?: shared.Aspsp;
    contentType: string;
    statusCode: number;
}
