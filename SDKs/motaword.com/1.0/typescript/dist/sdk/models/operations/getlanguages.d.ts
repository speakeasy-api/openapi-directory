import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    languages?: shared.Language[];
    statusCode: number;
}
