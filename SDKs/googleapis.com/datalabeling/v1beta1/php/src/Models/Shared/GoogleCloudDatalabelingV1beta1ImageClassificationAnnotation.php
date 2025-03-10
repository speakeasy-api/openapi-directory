<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation - Image classification annotation definition.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation
{
    /**
     * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1AnnotationSpec $annotationSpec
     */
	#[\JMS\Serializer\Annotation\SerializedName('annotationSpec')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatalabelingV1beta1AnnotationSpec')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDatalabelingV1beta1AnnotationSpec $annotationSpec = null;
    
	public function __construct()
	{
		$this->annotationSpec = null;
	}
}
