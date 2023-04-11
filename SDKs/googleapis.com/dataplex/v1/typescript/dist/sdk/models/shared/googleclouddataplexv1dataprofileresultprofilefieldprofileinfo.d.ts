import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfodoublefieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfointegerfieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfostringfieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfotopnvalue";
/**
 * The profile information for each field type.
 */
export declare class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo extends SpeakeasyBase {
    /**
     * Ratio of rows with distinct values against total scanned rows. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode.
     */
    distinctRatio?: number;
    /**
     * The profile information for a double type field.
     */
    doubleProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo;
    /**
     * The profile information for an integer type field.
     */
    integerProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo;
    /**
     * Ratio of rows with null value against total scanned rows.
     */
    nullRatio?: number;
    /**
     * The profile information for a string type field.
     */
    stringProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo;
    /**
     * The list of top N non-null values and number of times they occur in the scanned data. N is 10 or equal to the number of distinct values in the field, whichever is smaller. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode.
     */
    topNValues?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue[];
}
