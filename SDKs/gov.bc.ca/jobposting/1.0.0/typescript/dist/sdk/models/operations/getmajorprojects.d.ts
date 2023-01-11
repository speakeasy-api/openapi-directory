import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMajorProjectsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    majorProjects?: shared.MajorProject[];
    statusCode: number;
}
