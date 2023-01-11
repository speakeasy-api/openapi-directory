import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGlossariesPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetGlossariesRequest extends SpeakeasyBase {
    pathParams: GetGlossariesPathParams;
}
export declare class GetGlossariesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    glossaryList?: shared.GlossaryList;
    statusCode: number;
}
