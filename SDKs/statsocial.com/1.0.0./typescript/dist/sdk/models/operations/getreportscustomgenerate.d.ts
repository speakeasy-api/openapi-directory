import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportsCustomGenerateQueryParams extends SpeakeasyBase {
    reportName: string;
}
export declare class GetReportsCustomGenerateRequest extends SpeakeasyBase {
    queryParams: GetReportsCustomGenerateQueryParams;
}
export declare class GetReportsCustomGenerateResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fiveHundredError?: any;
    contentType: string;
    customGenerate?: any;
    statusCode: number;
}
