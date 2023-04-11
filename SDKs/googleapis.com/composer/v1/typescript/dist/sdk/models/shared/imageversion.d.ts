import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * ImageVersion information
 */
export declare class ImageVersion extends SpeakeasyBase {
    /**
     * Whether it is impossible to create an environment with the image version.
     */
    creationDisabled?: boolean;
    /**
     * The string identifier of the ImageVersion, in the form: "composer-x.y.z-airflow-a.b.c"
     */
    imageVersionId?: string;
    /**
     * Whether this is the default ImageVersion used by Composer during environment creation if no input ImageVersion is specified.
     */
    isDefault?: boolean;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    releaseDate?: Date;
    /**
     * supported python versions
     */
    supportedPythonVersions?: string[];
    /**
     * Whether it is impossible to upgrade an environment running with the image version.
     */
    upgradeDisabled?: boolean;
}
