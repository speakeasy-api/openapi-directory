import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEsimProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class ListEsimProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEsimProfileRequest extends SpeakeasyBase {
    /**
     * List the eSIM Profiles that have been associated with an EId.
     */
    eid?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * Find the eSIM Profile resource related to a [Sim](https://www.twilio.com/docs/wireless/api/sim-resource) resource by providing the SIM SID. Will always return an array with either 1 or 0 records.
     */
    simSid?: string;
    /**
     * List the eSIM Profiles that are in a given status.
     */
    status?: shared.EsimProfileEnumStatusEnum;
}
export declare class ListEsimProfileListEsimProfileResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListEsimProfileListEsimProfileResponse extends SpeakeasyBase {
    esimProfiles?: shared.SupersimV1EsimProfile[];
    meta?: ListEsimProfileListEsimProfileResponseMeta;
}
export declare class ListEsimProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEsimProfileResponse?: ListEsimProfileListEsimProfileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
