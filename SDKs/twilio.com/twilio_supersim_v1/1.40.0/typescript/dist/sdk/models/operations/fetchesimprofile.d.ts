import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchEsimProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchEsimProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchEsimProfileRequest extends SpeakeasyBase {
    /**
     * The SID of the eSIM Profile resource to fetch.
     */
    sid: string;
}
export declare class FetchEsimProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1EsimProfile?: shared.SupersimV1EsimProfile;
}
