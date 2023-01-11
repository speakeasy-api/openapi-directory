package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetRecommendationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public EndpointGetRecommendationsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetRecommendationsQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_acousticness")
    public Double maxAcousticness;
    public EndpointGetRecommendationsQueryParams withMaxAcousticness(Double maxAcousticness) {
        this.maxAcousticness = maxAcousticness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_danceability")
    public Double maxDanceability;
    public EndpointGetRecommendationsQueryParams withMaxDanceability(Double maxDanceability) {
        this.maxDanceability = maxDanceability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_duration_ms")
    public Integer maxDurationMs;
    public EndpointGetRecommendationsQueryParams withMaxDurationMs(Integer maxDurationMs) {
        this.maxDurationMs = maxDurationMs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_energy")
    public Double maxEnergy;
    public EndpointGetRecommendationsQueryParams withMaxEnergy(Double maxEnergy) {
        this.maxEnergy = maxEnergy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_instrumentalness")
    public Double maxInstrumentalness;
    public EndpointGetRecommendationsQueryParams withMaxInstrumentalness(Double maxInstrumentalness) {
        this.maxInstrumentalness = maxInstrumentalness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_key")
    public Integer maxKey;
    public EndpointGetRecommendationsQueryParams withMaxKey(Integer maxKey) {
        this.maxKey = maxKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_liveness")
    public Double maxLiveness;
    public EndpointGetRecommendationsQueryParams withMaxLiveness(Double maxLiveness) {
        this.maxLiveness = maxLiveness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_loudness")
    public Double maxLoudness;
    public EndpointGetRecommendationsQueryParams withMaxLoudness(Double maxLoudness) {
        this.maxLoudness = maxLoudness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_mode")
    public Integer maxMode;
    public EndpointGetRecommendationsQueryParams withMaxMode(Integer maxMode) {
        this.maxMode = maxMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_popularity")
    public Integer maxPopularity;
    public EndpointGetRecommendationsQueryParams withMaxPopularity(Integer maxPopularity) {
        this.maxPopularity = maxPopularity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_speechiness")
    public Double maxSpeechiness;
    public EndpointGetRecommendationsQueryParams withMaxSpeechiness(Double maxSpeechiness) {
        this.maxSpeechiness = maxSpeechiness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_tempo")
    public Double maxTempo;
    public EndpointGetRecommendationsQueryParams withMaxTempo(Double maxTempo) {
        this.maxTempo = maxTempo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_time_signature")
    public Integer maxTimeSignature;
    public EndpointGetRecommendationsQueryParams withMaxTimeSignature(Integer maxTimeSignature) {
        this.maxTimeSignature = maxTimeSignature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_valence")
    public Double maxValence;
    public EndpointGetRecommendationsQueryParams withMaxValence(Double maxValence) {
        this.maxValence = maxValence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_acousticness")
    public Double minAcousticness;
    public EndpointGetRecommendationsQueryParams withMinAcousticness(Double minAcousticness) {
        this.minAcousticness = minAcousticness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_danceability")
    public Double minDanceability;
    public EndpointGetRecommendationsQueryParams withMinDanceability(Double minDanceability) {
        this.minDanceability = minDanceability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_duration_ms")
    public Integer minDurationMs;
    public EndpointGetRecommendationsQueryParams withMinDurationMs(Integer minDurationMs) {
        this.minDurationMs = minDurationMs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_energy")
    public Double minEnergy;
    public EndpointGetRecommendationsQueryParams withMinEnergy(Double minEnergy) {
        this.minEnergy = minEnergy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_instrumentalness")
    public Double minInstrumentalness;
    public EndpointGetRecommendationsQueryParams withMinInstrumentalness(Double minInstrumentalness) {
        this.minInstrumentalness = minInstrumentalness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_key")
    public Integer minKey;
    public EndpointGetRecommendationsQueryParams withMinKey(Integer minKey) {
        this.minKey = minKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_liveness")
    public Double minLiveness;
    public EndpointGetRecommendationsQueryParams withMinLiveness(Double minLiveness) {
        this.minLiveness = minLiveness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_loudness")
    public Double minLoudness;
    public EndpointGetRecommendationsQueryParams withMinLoudness(Double minLoudness) {
        this.minLoudness = minLoudness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_mode")
    public Integer minMode;
    public EndpointGetRecommendationsQueryParams withMinMode(Integer minMode) {
        this.minMode = minMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_popularity")
    public Integer minPopularity;
    public EndpointGetRecommendationsQueryParams withMinPopularity(Integer minPopularity) {
        this.minPopularity = minPopularity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_speechiness")
    public Double minSpeechiness;
    public EndpointGetRecommendationsQueryParams withMinSpeechiness(Double minSpeechiness) {
        this.minSpeechiness = minSpeechiness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_tempo")
    public Double minTempo;
    public EndpointGetRecommendationsQueryParams withMinTempo(Double minTempo) {
        this.minTempo = minTempo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_time_signature")
    public Integer minTimeSignature;
    public EndpointGetRecommendationsQueryParams withMinTimeSignature(Integer minTimeSignature) {
        this.minTimeSignature = minTimeSignature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_valence")
    public Double minValence;
    public EndpointGetRecommendationsQueryParams withMinValence(Double minValence) {
        this.minValence = minValence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seed_artists")
    public String seedArtists;
    public EndpointGetRecommendationsQueryParams withSeedArtists(String seedArtists) {
        this.seedArtists = seedArtists;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seed_genres")
    public String seedGenres;
    public EndpointGetRecommendationsQueryParams withSeedGenres(String seedGenres) {
        this.seedGenres = seedGenres;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seed_tracks")
    public String seedTracks;
    public EndpointGetRecommendationsQueryParams withSeedTracks(String seedTracks) {
        this.seedTracks = seedTracks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_acousticness")
    public Double targetAcousticness;
    public EndpointGetRecommendationsQueryParams withTargetAcousticness(Double targetAcousticness) {
        this.targetAcousticness = targetAcousticness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_danceability")
    public Double targetDanceability;
    public EndpointGetRecommendationsQueryParams withTargetDanceability(Double targetDanceability) {
        this.targetDanceability = targetDanceability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_duration_ms")
    public Integer targetDurationMs;
    public EndpointGetRecommendationsQueryParams withTargetDurationMs(Integer targetDurationMs) {
        this.targetDurationMs = targetDurationMs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_energy")
    public Double targetEnergy;
    public EndpointGetRecommendationsQueryParams withTargetEnergy(Double targetEnergy) {
        this.targetEnergy = targetEnergy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_instrumentalness")
    public Double targetInstrumentalness;
    public EndpointGetRecommendationsQueryParams withTargetInstrumentalness(Double targetInstrumentalness) {
        this.targetInstrumentalness = targetInstrumentalness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_key")
    public Integer targetKey;
    public EndpointGetRecommendationsQueryParams withTargetKey(Integer targetKey) {
        this.targetKey = targetKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_liveness")
    public Double targetLiveness;
    public EndpointGetRecommendationsQueryParams withTargetLiveness(Double targetLiveness) {
        this.targetLiveness = targetLiveness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_loudness")
    public Double targetLoudness;
    public EndpointGetRecommendationsQueryParams withTargetLoudness(Double targetLoudness) {
        this.targetLoudness = targetLoudness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_mode")
    public Integer targetMode;
    public EndpointGetRecommendationsQueryParams withTargetMode(Integer targetMode) {
        this.targetMode = targetMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_popularity")
    public Integer targetPopularity;
    public EndpointGetRecommendationsQueryParams withTargetPopularity(Integer targetPopularity) {
        this.targetPopularity = targetPopularity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_speechiness")
    public Double targetSpeechiness;
    public EndpointGetRecommendationsQueryParams withTargetSpeechiness(Double targetSpeechiness) {
        this.targetSpeechiness = targetSpeechiness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_tempo")
    public Double targetTempo;
    public EndpointGetRecommendationsQueryParams withTargetTempo(Double targetTempo) {
        this.targetTempo = targetTempo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_time_signature")
    public Integer targetTimeSignature;
    public EndpointGetRecommendationsQueryParams withTargetTimeSignature(Integer targetTimeSignature) {
        this.targetTimeSignature = targetTimeSignature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_valence")
    public Double targetValence;
    public EndpointGetRecommendationsQueryParams withTargetValence(Double targetValence) {
        this.targetValence = targetValence;
        return this;
    }
}