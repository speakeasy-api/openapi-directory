import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A defined break template that sets an expectation for possible `Break`
 *
 * @remarks
 * instances on a `Shift`.
 */
export declare class BreakType extends SpeakeasyBase {
    /**
     * A human-readable name for this type of break. The name is displayed to
     *
     * @remarks
     * employees in Square products.
     */
    breakName: string;
    /**
     * A read-only timestamp in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of
     *
     * @remarks
     * this break. Precision less than minutes is truncated.
     */
    expectedDuration: string;
    /**
     * The UUID for this object.
     */
    id?: string;
    /**
     * Whether this break counts towards time worked for compensation
     *
     * @remarks
     * purposes.
     */
    isPaid: boolean;
    /**
     * The ID of the business location this type of break applies to.
     */
    locationId: string;
    /**
     * A read-only timestamp in RFC 3339 format.
     */
    updatedAt?: string;
    /**
     * Used for resolving concurrency issues. The request fails if the version
     *
     * @remarks
     * provided does not match the server version at the time of the request. If a value is not
     * provided, Square's servers execute a "blind" write; potentially
     * overwriting another writer's data.
     */
    version?: number;
}
