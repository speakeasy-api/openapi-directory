import { SpeakeasyBase } from "../../../internal/utils";
import { OBExternalPermissions1CodeEnum } from "./obexternalpermissions1codeenum";
import { OBExternalRequestStatus1CodeEnum } from "./obexternalrequeststatus1codeenum";
export declare class OBReadDataConsentResponse1 extends SpeakeasyBase {
    /**
     * Unique identification as assigned to identify the account access consent resource.
     */
    consentId: string;
    /**
     * Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    creationDateTime: Date;
    /**
     * Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    expirationDateTime?: Date;
    /**
     * Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.
     */
    permissions: OBExternalPermissions1CodeEnum[];
    /**
     * Specifies the status of consent resource in code form.
     */
    status: OBExternalRequestStatus1CodeEnum;
    /**
     * Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    statusUpdateDateTime: Date;
    /**
     * Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    transactionFromDateTime?: Date;
    /**
     * Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    transactionToDateTime?: Date;
}
