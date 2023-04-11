import { SpeakeasyBase } from "../../../internal/utils";
import { OBExternalStatementType1CodeEnum } from "./obexternalstatementtype1codeenum";
/**
 * Provides further details on a statement resource.
 */
export declare class OBStatement2 extends SpeakeasyBase {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     */
    accountId: string;
    /**
     * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    creationDateTime: Date;
    /**
     * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    endDateTime: Date;
    /**
     * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    startDateTime: Date;
    /**
     * Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
     */
    statementId?: string;
    /**
     * Unique reference for the statement. This reference may be optionally populated if available.
     */
    statementReference?: string;
    type: OBExternalStatementType1CodeEnum;
}
