import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostImproveRequests extends SpeakeasyBase {
    improvementProgramJson?: shared.ImprovementProgramJson;
    improvementProgramJson1?: shared.ImprovementProgramJson;
    improvementProgramMultipart?: shared.ImprovementProgramMultipart;
}
export declare class PostImproveRequest extends SpeakeasyBase {
    request: PostImproveRequests;
}
export declare class PostImproveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
