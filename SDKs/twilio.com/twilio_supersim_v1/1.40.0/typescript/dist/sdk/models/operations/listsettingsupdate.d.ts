import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSettingsUpdateServerList: readonly ["https://supersim.twilio.com"];
export declare class ListSettingsUpdateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSettingsUpdateRequest extends SpeakeasyBase {
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
     * Filter the Settings Updates by a Super SIM's SID or UniqueName.
     */
    sim?: string;
    /**
     * Filter the Settings Updates by status. Can be `scheduled`, `in-progress`, `successful`, or `failed`.
     */
    status?: shared.SettingsUpdateEnumStatusEnum;
}
export declare class ListSettingsUpdateListSettingsUpdateResponseMeta extends SpeakeasyBase {
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
export declare class ListSettingsUpdateListSettingsUpdateResponse extends SpeakeasyBase {
    meta?: ListSettingsUpdateListSettingsUpdateResponseMeta;
    settingsUpdates?: shared.SupersimV1SettingsUpdate[];
}
export declare class ListSettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSettingsUpdateResponse?: ListSettingsUpdateListSettingsUpdateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
