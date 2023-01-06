package shared

type CloudCdnEgressWorkloadCacheEgressDestinationEnum string

const (
	CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationUnspecified       CloudCdnEgressWorkloadCacheEgressDestinationEnum = "CACHE_EGRESS_DESTINATION_UNSPECIFIED"
	CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationAsiaPacific       CloudCdnEgressWorkloadCacheEgressDestinationEnum = "CACHE_EGRESS_DESTINATION_ASIA_PACIFIC"
	CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationChina             CloudCdnEgressWorkloadCacheEgressDestinationEnum = "CACHE_EGRESS_DESTINATION_CHINA"
	CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationEurope            CloudCdnEgressWorkloadCacheEgressDestinationEnum = "CACHE_EGRESS_DESTINATION_EUROPE"
	CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationNorthAmerica      CloudCdnEgressWorkloadCacheEgressDestinationEnum = "CACHE_EGRESS_DESTINATION_NORTH_AMERICA"
	CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationOceania           CloudCdnEgressWorkloadCacheEgressDestinationEnum = "CACHE_EGRESS_DESTINATION_OCEANIA"
	CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationLatinAmerica      CloudCdnEgressWorkloadCacheEgressDestinationEnum = "CACHE_EGRESS_DESTINATION_LATIN_AMERICA"
	CloudCdnEgressWorkloadCacheEgressDestinationEnumCacheEgressDestinationOtherDestinations CloudCdnEgressWorkloadCacheEgressDestinationEnum = "CACHE_EGRESS_DESTINATION_OTHER_DESTINATIONS"
)

// CloudCdnEgressWorkload
// Specifies usage for Cloud CDN egress.
type CloudCdnEgressWorkload struct {
	CacheEgressDestination *CloudCdnEgressWorkloadCacheEgressDestinationEnum `json:"cacheEgressDestination,omitempty"`
	CacheEgressRate        *Usage                                            `json:"cacheEgressRate,omitempty"`
}
