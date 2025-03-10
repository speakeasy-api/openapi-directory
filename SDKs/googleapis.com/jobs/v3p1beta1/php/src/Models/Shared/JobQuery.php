<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * JobQuery - Input only. The query required to perform a search query.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class JobQuery
{
    /**
     * Input only. Parameters needed for commute search.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CommuteFilter $commuteFilter
     */
	#[\JMS\Serializer\Annotation\SerializedName('commuteFilter')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CommuteFilter')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CommuteFilter $commuteFilter = null;
    
    /**
     * Optional. This filter specifies the company Company.display_name of the jobs to search against. The company name must match the value exactly. Alternatively, the value being searched for can be wrapped in different match operators. `SUBSTRING_MATCH([value])` The company name must contain a case insensitive substring match of the value. Using this function may increase latency. Sample Value: `SUBSTRING_MATCH(google)` `MULTI_WORD_TOKEN_MATCH([value])` The value will be treated as a multi word token and the company name must contain a case insensitive match of the value. Using this function may increase latency. Sample Value: `MULTI_WORD_TOKEN_MATCH(google)` If a value isn't specified, jobs within the search results are associated with any company. If multiple values are specified, jobs within the search results may be associated with any of the specified companies. At most 20 company display name filters are allowed.
     * 
     * @var ?array<string> $companyDisplayNames
     */
	#[\JMS\Serializer\Annotation\SerializedName('companyDisplayNames')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $companyDisplayNames = null;
    
    /**
     * Optional. This filter specifies the company entities to search against. If a value isn't specified, jobs are searched for against all companies. If multiple values are specified, jobs are searched against the companies specified. The format is "projects/{project_id}/companies/{company_id}", for example, "projects/api-test-project/companies/foo". At most 20 company filters are allowed.
     * 
     * @var ?array<string> $companyNames
     */
	#[\JMS\Serializer\Annotation\SerializedName('companyNames')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $companyNames = null;
    
    /**
     * Input only. Filter on job compensation type and amount.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CompensationFilter $compensationFilter
     */
	#[\JMS\Serializer\Annotation\SerializedName('compensationFilter')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CompensationFilter')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CompensationFilter $compensationFilter = null;
    
    /**
     * Optional. This filter specifies a structured syntax to match against the Job.custom_attributes marked as `filterable`. The syntax for this expression is a subset of SQL syntax. Supported operators are: `=`, `!=`, `<`, `<=`, `>`, and `>=` where the left of the operator is a custom field key and the right of the operator is a number or a quoted string. You must escape backslash (\\) and quote (\") characters. Supported functions are `LOWER([field_name])` to perform a case insensitive match and `EMPTY([field_name])` to filter on the existence of a key. Boolean expressions (AND/OR/NOT) are supported up to 3 levels of nesting (for example, "((A AND B AND C) OR NOT D) AND E"), a maximum of 100 comparisons or functions are allowed in the expression. The expression must be < 10000 bytes in length. Sample Query: `(LOWER(driving_license)="class \"a\"" OR EMPTY(driving_license)) AND driving_years > 10`
     * 
     * @var ?string $customAttributeFilter
     */
	#[\JMS\Serializer\Annotation\SerializedName('customAttributeFilter')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customAttributeFilter = null;
    
    /**
     * Optional. This flag controls the spell-check feature. If false, the service attempts to correct a misspelled query, for example, "enginee" is corrected to "engineer". Defaults to false: a spell check is performed.
     * 
     * @var ?bool $disableSpellCheck
     */
	#[\JMS\Serializer\Annotation\SerializedName('disableSpellCheck')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $disableSpellCheck = null;
    
    /**
     * Optional. The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL_TIME. If a value is not specified, jobs in the search results includes any employment type. If multiple values are specified, jobs in the search results include any of the specified employment types.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\JobQueryEmploymentTypesEnum> $employmentTypes
     */
	#[\JMS\Serializer\Annotation\SerializedName('employmentTypes')]
    #[\JMS\Serializer\Annotation\Type('array<enum<OpenAPI\OpenAPI\Models\Shared\JobQueryEmploymentTypesEnum>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $employmentTypes = null;
    
    /**
     * Optional. This filter specifies a list of job names to be excluded during search. At most 400 excluded job names are allowed.
     * 
     * @var ?array<string> $excludedJobs
     */
	#[\JMS\Serializer\Annotation\SerializedName('excludedJobs')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $excludedJobs = null;
    
    /**
     * Optional. The category filter specifies the categories of jobs to search against. See Category for more information. If a value is not specified, jobs from any category are searched against. If multiple values are specified, jobs from any of the specified categories are searched against.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\JobQueryJobCategoriesEnum> $jobCategories
     */
	#[\JMS\Serializer\Annotation\SerializedName('jobCategories')]
    #[\JMS\Serializer\Annotation\Type('array<enum<OpenAPI\OpenAPI\Models\Shared\JobQueryJobCategoriesEnum>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $jobCategories = null;
    
    /**
     * Optional. This filter specifies the locale of jobs to search against, for example, "en-US". If a value isn't specified, the search results can contain jobs in any locale. Language codes should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). At most 10 language code filters are allowed.
     * 
     * @var ?array<string> $languageCodes
     */
	#[\JMS\Serializer\Annotation\SerializedName('languageCodes')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $languageCodes = null;
    
    /**
     * Optional. The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information. If a location value isn't specified, jobs fitting the other search criteria are retrieved regardless of where they're located. If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance_in_miles parameter, the maximum provided distance is used for all locations. At most 5 location filters are allowed.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\LocationFilter> $locationFilters
     */
	#[\JMS\Serializer\Annotation\SerializedName('locationFilters')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\LocationFilter>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $locationFilters = null;
    
    /**
     * Message representing a period of time between two timestamps.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\TimestampRange $publishTimeRange
     */
	#[\JMS\Serializer\Annotation\SerializedName('publishTimeRange')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TimestampRange')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TimestampRange $publishTimeRange = null;
    
    /**
     * Optional. The query string that matches against the job title, description, and location fields. The maximum number of allowed characters is 255.
     * 
     * @var ?string $query
     */
	#[\JMS\Serializer\Annotation\SerializedName('query')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $query = null;
    
    /**
     * The language code of query. For example, "en-US". This field helps to better interpret the query. If a value isn't specified, the query language code is automatically detected, which may not be accurate. Language code should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).
     * 
     * @var ?string $queryLanguageCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('queryLanguageCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $queryLanguageCode = null;
    
	public function __construct()
	{
		$this->commuteFilter = null;
		$this->companyDisplayNames = null;
		$this->companyNames = null;
		$this->compensationFilter = null;
		$this->customAttributeFilter = null;
		$this->disableSpellCheck = null;
		$this->employmentTypes = null;
		$this->excludedJobs = null;
		$this->jobCategories = null;
		$this->languageCodes = null;
		$this->locationFilters = null;
		$this->publishTimeRange = null;
		$this->query = null;
		$this->queryLanguageCode = null;
	}
}
