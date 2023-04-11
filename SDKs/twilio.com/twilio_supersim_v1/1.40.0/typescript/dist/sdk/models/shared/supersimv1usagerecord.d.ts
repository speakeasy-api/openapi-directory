import { SpeakeasyBase } from "../../../internal/utils";
export declare class SupersimV1UsageRecord extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that incurred the usage.
     */
    accountSid?: string;
    /**
     * The currency in which the billed amounts are measured, specified in the 3 letter ISO 4127 format (e.g. `USD`, `EUR`, `JPY`). This can be null when data_toal_billed is 0 and we do not yet have billing information for the corresponding data usage. Refer to [Data Usage Processing](https://www.twilio.com/docs/iot/supersim/api/usage-record-resource#data-usage-processing) for more details.
     */
    billedUnit?: string;
    /**
     * Total data downloaded in bytes, aggregated by the query parameters.
     */
    dataDownload?: number;
    /**
     * Total of data_upload and data_download.
     */
    dataTotal?: number;
    /**
     * Total amount in the `billed_unit` that was charged for the data uploaded or downloaded. Will return 0 for usage prior to February 1, 2022. Value may be 0 despite `data_total` being greater than 0 if the data usage is still being processed by Twilio's billing system. Refer to [Data Usage Processing](https://www.twilio.com/docs/iot/supersim/api/usage-record-resource#data-usage-processing) for more details.
     */
    dataTotalBilled?: number;
    /**
     * Total data uploaded in bytes, aggregated by the query parameters.
     */
    dataUpload?: number;
    /**
     * SID of the Fleet resource the usage occurred on. Value will only be present when either a value for the `Fleet` query parameter is provided or when UsageRecords are grouped by `fleet`. Otherwise, the value will be `null`.
     */
    fleetSid?: string;
    /**
     * Alpha-2 ISO Country Code that the usage occurred in. Value will only be present when either a value for the `IsoCountry` query parameter is provided or when UsageRecords are grouped by `isoCountry`. Otherwise, the value will be `null`.
     */
    isoCountry?: string;
    /**
     * SID of the Network resource the usage occurred on. Value will only be present when either a value for the `Network` query parameter is provided or when UsageRecords are grouped by `network`. Otherwise, the value will be `null`.
     */
    networkSid?: string;
    /**
     * The time period for which the usage is reported. The period is represented as a pair of `start_time` and `end_time` timestamps specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    period?: any;
    /**
     * SID of a Sim resource to which the UsageRecord belongs. Value will only be present when either a value for the `Sim` query parameter is provided or when UsageRecords are grouped by `sim`. Otherwise, the value will be `null`.
     */
    simSid?: string;
}
