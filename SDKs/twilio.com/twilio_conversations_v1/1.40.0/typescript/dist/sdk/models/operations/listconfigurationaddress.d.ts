import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class ListConfigurationAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConfigurationAddressRequest extends SpeakeasyBase {
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
     * Filter the address configurations by its type. This value can be one of: `whatsapp`, `sms`.
     */
    type?: string;
}
export declare class ListConfigurationAddressListConfigurationAddressResponseMeta extends SpeakeasyBase {
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
export declare class ListConfigurationAddressListConfigurationAddressResponse extends SpeakeasyBase {
    addressConfigurations?: shared.ConversationsV1ConfigurationAddress[];
    meta?: ListConfigurationAddressListConfigurationAddressResponseMeta;
}
export declare class ListConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConfigurationAddressResponse?: ListConfigurationAddressListConfigurationAddressResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
