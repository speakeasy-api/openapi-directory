import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReportsCustomCreateQueryParams extends SpeakeasyBase {
    filter?: string;
    uploadHash: string;
}
export declare class PostReportsCustomCreateRequest extends SpeakeasyBase {
    queryParams: PostReportsCustomCreateQueryParams;
}
export declare class PostReportsCustomCreateResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fourHundredAndFourError?: any;
    fiveHundredError?: any;
    contentType: string;
    customCreate?: any;
    statusCode: number;
}
