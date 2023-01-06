package shared

type ImageCreateResultStatusEnum string

const (
	ImageCreateResultStatusEnumOk                                    ImageCreateResultStatusEnum = "OK"
	ImageCreateResultStatusEnumOkDuplicate                           ImageCreateResultStatusEnum = "OKDuplicate"
	ImageCreateResultStatusEnumErrorSource                           ImageCreateResultStatusEnum = "ErrorSource"
	ImageCreateResultStatusEnumErrorImageFormat                      ImageCreateResultStatusEnum = "ErrorImageFormat"
	ImageCreateResultStatusEnumErrorImageSize                        ImageCreateResultStatusEnum = "ErrorImageSize"
	ImageCreateResultStatusEnumErrorStorage                          ImageCreateResultStatusEnum = "ErrorStorage"
	ImageCreateResultStatusEnumErrorLimitExceed                      ImageCreateResultStatusEnum = "ErrorLimitExceed"
	ImageCreateResultStatusEnumErrorTagLimitExceed                   ImageCreateResultStatusEnum = "ErrorTagLimitExceed"
	ImageCreateResultStatusEnumErrorRegionLimitExceed                ImageCreateResultStatusEnum = "ErrorRegionLimitExceed"
	ImageCreateResultStatusEnumErrorUnknown                          ImageCreateResultStatusEnum = "ErrorUnknown"
	ImageCreateResultStatusEnumErrorNegativeAndRegularTagOnSameImage ImageCreateResultStatusEnum = "ErrorNegativeAndRegularTagOnSameImage"
)

type ImageCreateResult struct {
	Image     *Image                       `json:"image,omitempty"`
	SourceURL *string                      `json:"sourceUrl,omitempty"`
	Status    *ImageCreateResultStatusEnum `json:"status,omitempty"`
}
