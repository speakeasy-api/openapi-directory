package shared

type CloudCdnWorkloadCacheFillOriginServiceEnum string

const (
	CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceUnspecified              CloudCdnWorkloadCacheFillOriginServiceEnum = "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED"
	CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceGoogleCloudStorageBucket CloudCdnWorkloadCacheFillOriginServiceEnum = "CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET"
	CloudCdnWorkloadCacheFillOriginServiceEnumCacheFillOriginServiceBackendService           CloudCdnWorkloadCacheFillOriginServiceEnum = "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE"
)

// CloudCdnWorkload
// Specifies usage for Cloud CDN resources.
type CloudCdnWorkload struct {
	CacheFillOriginService *CloudCdnWorkloadCacheFillOriginServiceEnum `json:"cacheFillOriginService,omitempty"`
	CacheFillRate          *Usage                                      `json:"cacheFillRate,omitempty"`
	CacheFillRegions       *CacheFillRegions                           `json:"cacheFillRegions,omitempty"`
	CacheLookUpRate        *Usage                                      `json:"cacheLookUpRate,omitempty"`
}
