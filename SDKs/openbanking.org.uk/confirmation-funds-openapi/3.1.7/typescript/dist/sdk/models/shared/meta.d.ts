import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Meta Data relevant to the payload
 */
export declare class Meta extends SpeakeasyBase {
    /**
     * All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    firstAvailableDateTime?: Date;
    /**
     * All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    lastAvailableDateTime?: Date;
    totalPages?: number;
}
