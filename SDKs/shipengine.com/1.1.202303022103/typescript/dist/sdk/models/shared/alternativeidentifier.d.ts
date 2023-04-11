import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information some carriers may provide by which to identify a given label in their system.
 *
 * @remarks
 *
 */
export declare class AlternativeIdentifier extends SpeakeasyBase {
    /**
     * The type of alternative_identifier that corresponds to the value.
     *
     * @remarks
     *
     */
    type?: string;
    /**
     * The value of the alternative_identifier.
     *
     * @remarks
     *
     */
    value?: string;
}
