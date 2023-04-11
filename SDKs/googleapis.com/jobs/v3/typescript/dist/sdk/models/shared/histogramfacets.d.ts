import { SpeakeasyBase } from "../../../internal/utils";
import { CompensationHistogramRequest } from "./compensationhistogramrequest";
import { CustomAttributeHistogramRequest } from "./customattributehistogramrequest";
export declare enum HistogramFacetsSimpleHistogramFacetsEnum {
    SearchTypeUnspecified = "SEARCH_TYPE_UNSPECIFIED",
    CompanyId = "COMPANY_ID",
    EmploymentType = "EMPLOYMENT_TYPE",
    CompanySize = "COMPANY_SIZE",
    DatePublished = "DATE_PUBLISHED",
    EducationLevel = "EDUCATION_LEVEL",
    ExperienceLevel = "EXPERIENCE_LEVEL",
    Admin1 = "ADMIN_1",
    Country = "COUNTRY",
    City = "CITY",
    Locale = "LOCALE",
    Language = "LANGUAGE",
    Category = "CATEGORY",
    CityCoordinate = "CITY_COORDINATE",
    Admin1Country = "ADMIN_1_COUNTRY",
    CompanyDisplayName = "COMPANY_DISPLAY_NAME",
    BaseCompensationUnit = "BASE_COMPENSATION_UNIT"
}
/**
 * Input only. Histogram facets to be specified in SearchJobsRequest.
 */
export declare class HistogramFacets extends SpeakeasyBase {
    /**
     * Optional. Specifies compensation field-based histogram requests. Duplicate values of CompensationHistogramRequest.type are not allowed.
     */
    compensationHistogramFacets?: CompensationHistogramRequest[];
    /**
     * Optional. Specifies the custom attributes histogram requests. Duplicate values of CustomAttributeHistogramRequest.key are not allowed.
     */
    customAttributeHistogramFacets?: CustomAttributeHistogramRequest[];
    /**
     * Optional. Specifies the simple type of histogram facets, for example, `COMPANY_SIZE`, `EMPLOYMENT_TYPE` etc.
     */
    simpleHistogramFacets?: HistogramFacetsSimpleHistogramFacetsEnum[];
}
