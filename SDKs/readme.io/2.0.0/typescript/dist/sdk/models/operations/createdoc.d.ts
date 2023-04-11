import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDocSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDocRequest extends SpeakeasyBase {
    /**
     * Doc object
     */
    doc: shared.Doc;
    /**
     * Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
     */
    xReadmeVersion: string;
}
export declare class CreateDocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
