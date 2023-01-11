import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportsCustomCreateQueryParams extends SpeakeasyBase {
    filter?: string;
    uploadHash: string;
}
export declare class GetReportsCustomCreateRequest extends SpeakeasyBase {
    queryParams: GetReportsCustomCreateQueryParams;
}
export declare class GetReportsCustomCreateResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fourHundredAndFourError?: any;
    fiveHundredError?: any;
    contentType: string;
    customCreate?: any;
    statusCode: number;
}
