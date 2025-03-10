import { FullNameParsedSimilarityKey } from "./fullnameparsedsimilaritykey";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.interzoid.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This API provides a similarity key used to match with other similar full name data when data fields are parsed into first name and last name components, including for purposes of deduplication, fuzzy matching, or merging of datasets. A much higher match rate will be achieved by matching on the similarity key rather than the data itself. This API is for full name data where first and last name are in separate fields. Use the Full Name Similarity Key API for first and last name data that are in the same field.
 *
 * @see {@link https://www.interzoid.com/services/getfullnameparsedmatch} - API home page and documentation
 */
export declare class SDK {
    fullNameParsedSimilarityKey: FullNameParsedSimilarityKey;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
