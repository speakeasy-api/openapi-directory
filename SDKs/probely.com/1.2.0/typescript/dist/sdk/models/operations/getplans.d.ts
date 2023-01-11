import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlansResponse extends SpeakeasyBase {
    contentType: string;
    plans?: shared.Plan[];
    statusCode: number;
}
