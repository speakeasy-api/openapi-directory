<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PatientHealthMetricCreateResourceRelationshipsPatientData
{
    /**
     * Required if the `meta.query` is not defined.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * Allows the specification of a query for a patient rather than providing a patient id directly
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceRelationshipsPatientDataMeta $meta
     */
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceRelationshipsPatientDataMeta')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PatientHealthMetricCreateResourceRelationshipsPatientDataMeta $meta = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $type = null;
    
	public function __construct()
	{
		$this->id = null;
		$this->meta = null;
		$this->type = null;
	}
}
