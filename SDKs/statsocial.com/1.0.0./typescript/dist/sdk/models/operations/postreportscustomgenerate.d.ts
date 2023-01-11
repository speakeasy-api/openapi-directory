import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReportsCustomGenerateQueryParams extends SpeakeasyBase {
    reportName: string;
}
export declare class PostReportsCustomGenerateRequest extends SpeakeasyBase {
    queryParams: PostReportsCustomGenerateQueryParams;
}
export declare class PostReportsCustomGenerateResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fiveHundredError?: any;
    contentType: string;
    customGenerate?: any;
    statusCode: number;
}
