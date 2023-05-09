# customMusic

### Available Operations

* [createAudioRenders](#createaudiorenders) - Create rendered audio
* [fetchRenders](#fetchrenders) - Get details about audio renders
* [listCustomDescriptors](#listcustomdescriptors) - List computer audio descriptors
* [listCustomInstruments](#listcustominstruments) - List computer audio instruments

## createAudioRenders

This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAudioRendersResponse;
import org.openapis.openapi.models.operations.CreateAudioRendersSecurity;
import org.openapis.openapi.models.shared.AudioRenderTimeline;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpan;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegionEndType;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegionEndTypeEventEnum;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegionEndTypeTypeEnum;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegionKey;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegionKeyTonicNoteEnum;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegionKeyTonicQualityEnum;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegionRegionEnum;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanSpanTypeEnum;
import org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges;
import org.openapis.openapi.models.shared.CreateAudioRender;
import org.openapis.openapi.models.shared.CreateAudioRenderPresetEnum;
import org.openapis.openapi.models.shared.CreateAudioRendersRequest;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateAudioRendersRequest req = new CreateAudioRendersRequest(                new org.openapis.openapi.models.shared.CreateAudioRender[]{{
                                add(new CreateAudioRender("My Project.mp3", CreateAudioRenderPresetEnum.MASTER_MP3,                 new AudioRenderTimeline() {{
                                                    spans = new org.openapis.openapi.models.shared.AudioRenderTimelineSpan[]{{
                                                        add(new AudioRenderTimelineSpan(AudioRenderTimelineSpanSpanTypeEnum.METERED, 530537L) {{
                                                            id = 5922.31;
                                                            instrumentGroups = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup[]{{
                                                                add(new AudioRenderTimelineSpanInstrumentGroup("tempora") {{
                                                                    instrumentGroup = "necessitatibus";
                                                                    statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(5520.78, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                            beat = 4067.33;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new AudioRenderTimelineSpanInstrumentGroup("incidunt") {{
                                                                    instrumentGroup = "tempora";
                                                                    statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(254.97, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                            beat = 9700.76;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                                        }}),
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(7086.09, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                            beat = 8880.44;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            regions = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion[]{{
                                                                add(new AudioRenderTimelineSpanRegion(901483L, "numquam", 3299.35, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                                    beat = 894864L;
                                                                    descriptor = "rem";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(3335.07, AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                                        beat = 265.22;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                                    }};
                                                                    id = 9671.22;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.DOUBLE_SHARP;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.D;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanRegion(892863L, "neque", 6771.15, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                                    beat = 889234L;
                                                                    descriptor = "beatae";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(7400.98, AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                                        beat = 5124.52;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                                    }};
                                                                    id = 5300.89;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.SHARP;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.B;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                                }}),
                                                            }};
                                                            spanType = AudioRenderTimelineSpanSpanTypeEnum.UNMETERED;
                                                            tempo = 676243L;
                                                            tempoChanges = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges[]{{
                                                                add(new AudioRenderTimelineSpanTempoChanges(5436.78, 1482.68) {{
                                                                    tempo = 8792.35;
                                                                    time = 2726.83;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanTempoChanges(302.35, 6350.57) {{
                                                                    tempo = 2826.99;
                                                                    time = 8563.03;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanTempoChanges(78.84, 4602.2) {{
                                                                    tempo = 7103.37;
                                                                    time = 2996.43;
                                                                }}),
                                                            }};
                                                            time = 372679L;
                                                        }}),
                                                    }};
                                                }};) {{
                                    filename = "My Project.mp3";
                                    preset = CreateAudioRenderPresetEnum.MASTER_MP3;
                                    timeline = new AudioRenderTimeline() {{
                                        spans = new org.openapis.openapi.models.shared.AudioRenderTimelineSpan[]{{
                                            add(new AudioRenderTimelineSpan(AudioRenderTimelineSpanSpanTypeEnum.UNMETERED, 853940L) {{
                                                id = 7276.97;
                                                instrumentGroups = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup[]{{
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("reprehenderit") {{
                                                        instrumentGroup = "soluta";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(1197.71, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 3069.86;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("architecto") {{
                                                        instrumentGroup = "ullam";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(1852.32, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 163.28;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(9292.92, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 4012.59;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("mollitia") {{
                                                        instrumentGroup = "omnis";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(920.27, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 984.78;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(865.32, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 559.65;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(8395.13, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 2371.73;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(5130.75, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 5223.71;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("natus") {{
                                                        instrumentGroup = "ab";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(2211.61, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 2519.41;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(1310.55, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 2531.91;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(1154.84, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 120.36;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                regions = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion[]{{
                                                    add(new AudioRenderTimelineSpanRegion(989410L, "nemo", 653.04, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                        beat = 974257L;
                                                        descriptor = "voluptas";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(3100.67, AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                            beat = 9903.45;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                        }};
                                                        id = 6387.62;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.DOUBLE_SHARP;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.F;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                    }}),
                                                }};
                                                spanType = AudioRenderTimelineSpanSpanTypeEnum.UNMETERED;
                                                tempo = 801836L;
                                                tempoChanges = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges[]{{
                                                    add(new AudioRenderTimelineSpanTempoChanges(6835.73, 6625.05) {{
                                                        tempo = 704.47;
                                                        time = 2414.18;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanTempoChanges(6339.31, 6658.59) {{
                                                        tempo = 3807.29;
                                                        time = 2460.63;
                                                    }}),
                                                }};
                                                time = 926880L;
                                            }}),
                                            add(new AudioRenderTimelineSpan(AudioRenderTimelineSpanSpanTypeEnum.UNMETERED, 274823L) {{
                                                id = 4240.89;
                                                instrumentGroups = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup[]{{
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("assumenda") {{
                                                        instrumentGroup = "quos";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(7065.75, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 2870.51;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(3605.45, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 4148.57;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("sunt") {{
                                                        instrumentGroup = "nemo";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(7386.83, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 3975.33;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(9372.85, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 4490.83;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(3817.6, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 2572.33;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(8970.71, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 6971.42;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                regions = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion[]{{
                                                    add(new AudioRenderTimelineSpanRegion(916727L, "libero", 1138.16, AudioRenderTimelineSpanRegionRegionEnum.SILENCE) {{
                                                        beat = 241545L;
                                                        descriptor = "non";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(9509.53, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                            beat = 2282.63;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                        }};
                                                        id = 3581.07;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.SHARP;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.E;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanRegion(503934L, "in", 2962.42, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                        beat = 631126L;
                                                        descriptor = "tempora";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(3742.96, AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                            beat = 1328.15;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                        }};
                                                        id = 6801.16;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.FLAT;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.A;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanRegion(519643L, "hic", 3487.83, AudioRenderTimelineSpanRegionRegionEnum.SILENCE) {{
                                                        beat = 885963L;
                                                        descriptor = "temporibus";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(5023.89, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                            beat = 3518.7;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                        }};
                                                        id = 2015.17;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.SHARP;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.F;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanRegion(671907L, "sed", 4475.16, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                        beat = 24619L;
                                                        descriptor = "rerum";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(9944.01, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                            beat = 1488.29;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                        }};
                                                        id = 7090.72;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.DOUBLE_FLAT;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.G;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                    }}),
                                                }};
                                                spanType = AudioRenderTimelineSpanSpanTypeEnum.UNMETERED;
                                                tempo = 131289L;
                                                tempoChanges = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges[]{{
                                                    add(new AudioRenderTimelineSpanTempoChanges(3828.08, 9602.57) {{
                                                        tempo = 6041.18;
                                                        time = 1000.32;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanTempoChanges(9677.95, 193) {{
                                                        tempo = 8953.86;
                                                        time = 724.34;
                                                    }}),
                                                }};
                                                time = 546885L;
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new CreateAudioRender("My Project.mp3", CreateAudioRenderPresetEnum.MASTER_MP3,                 new AudioRenderTimeline() {{
                                                    spans = new org.openapis.openapi.models.shared.AudioRenderTimelineSpan[]{{
                                                        add(new AudioRenderTimelineSpan(AudioRenderTimelineSpanSpanTypeEnum.METERED, 321043L) {{
                                                            id = 3824.4;
                                                            instrumentGroups = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup[]{{
                                                                add(new AudioRenderTimelineSpanInstrumentGroup("tempora") {{
                                                                    instrumentGroup = "quasi";
                                                                    statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(8965.82, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                            beat = 9849.34;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            regions = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion[]{{
                                                                add(new AudioRenderTimelineSpanRegion(483706L, "tempora", 4582.59, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                                    beat = 473190L;
                                                                    descriptor = "dicta";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(9799.63, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                                        beat = 4797.54;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                                    }};
                                                                    id = 999.58;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.DOUBLE_SHARP;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.C;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanRegion(21973L, "eum", 3747.53, AudioRenderTimelineSpanRegionRegionEnum.SILENCE) {{
                                                                    beat = 235263L;
                                                                    descriptor = "aliquid";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(3447.18, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                                        beat = 588.7;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                                    }};
                                                                    id = 3996.67;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.SHARP;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.E;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                                }}),
                                                            }};
                                                            spanType = AudioRenderTimelineSpanSpanTypeEnum.UNMETERED;
                                                            tempo = 70042L;
                                                            tempoChanges = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges[]{{
                                                                add(new AudioRenderTimelineSpanTempoChanges(6534.21, 6717.94) {{
                                                                    tempo = 8224.07;
                                                                    time = 9139.92;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanTempoChanges(5369.23, 3162.2) {{
                                                                    tempo = 7263.43;
                                                                    time = 3240.83;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanTempoChanges(4050.36, 7758.03) {{
                                                                    tempo = 1104.77;
                                                                    time = 8333.16;
                                                                }}),
                                                            }};
                                                            time = 405373L;
                                                        }}),
                                                        add(new AudioRenderTimelineSpan(AudioRenderTimelineSpanSpanTypeEnum.METERED, 987349L) {{
                                                            id = 7139.27;
                                                            instrumentGroups = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup[]{{
                                                                add(new AudioRenderTimelineSpanInstrumentGroup("fuga") {{
                                                                    instrumentGroup = "molestias";
                                                                    statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(5308.6, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                            beat = 3996.6;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                                        }}),
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(6656.78, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                            beat = 852.33;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                                        }}),
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(8892.88, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                            beat = 296.34;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            regions = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion[]{{
                                                                add(new AudioRenderTimelineSpanRegion(355225L, "perferendis", 8483.41, AudioRenderTimelineSpanRegionRegionEnum.SILENCE) {{
                                                                    beat = 891315L;
                                                                    descriptor = "voluptatem";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(4042.44, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                                        beat = 12.07;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                                    }};
                                                                    id = 7963.2;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.FLAT;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.B;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanRegion(8689L, "architecto", 249.44, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                                    beat = 770675L;
                                                                    descriptor = "quibusdam";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(2228.64, AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                                        beat = 7205.28;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                                    }};
                                                                    id = 5372.79;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.DOUBLE_FLAT;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.D;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanRegion(884952L, "esse", 8972.77, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                                    beat = 144286L;
                                                                    descriptor = "ab";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(8562.77, AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                                        beat = 5137.6;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                                    }};
                                                                    id = 551.07;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.NATURAL;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.B;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanRegion(388319L, "recusandae", 1603.93, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                                    beat = 332191L;
                                                                    descriptor = "nesciunt";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(5282.34, AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                                        beat = 7129.27;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                                    }};
                                                                    id = 704.1;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.SHARP;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.E;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                                }}),
                                                            }};
                                                            spanType = AudioRenderTimelineSpanSpanTypeEnum.METERED;
                                                            tempo = 895692L;
                                                            tempoChanges = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges[]{{
                                                                add(new AudioRenderTimelineSpanTempoChanges(8783.73, 6675.93) {{
                                                                    tempo = 3925.69;
                                                                    time = 8711.03;
                                                                }}),
                                                            }};
                                                            time = 690785L;
                                                        }}),
                                                        add(new AudioRenderTimelineSpan(AudioRenderTimelineSpanSpanTypeEnum.METERED, 482892L) {{
                                                            id = 9180.92;
                                                            instrumentGroups = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup[]{{
                                                                add(new AudioRenderTimelineSpanInstrumentGroup("aspernatur") {{
                                                                    instrumentGroup = "occaecati";
                                                                    statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(6423.52, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                            beat = 4558.98;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                                        }}),
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(5510.79, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                            beat = 2540.25;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new AudioRenderTimelineSpanInstrumentGroup("rem") {{
                                                                    instrumentGroup = "ducimus";
                                                                    statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(2773.4, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                            beat = 6817.4;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new AudioRenderTimelineSpanInstrumentGroup("cupiditate") {{
                                                                    instrumentGroup = "fugiat";
                                                                    statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(2330.78, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                            beat = 3955.44;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new AudioRenderTimelineSpanInstrumentGroup("delectus") {{
                                                                    instrumentGroup = "reiciendis";
                                                                    statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(1785.8, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                            beat = 38.6;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                                        }}),
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(813.69, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                            beat = 6128.67;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                                        }}),
                                                                        add(new AudioRenderTimelineSpanInstrumentGroupStatus(7196.2, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                            beat = 8818.97;
                                                                            status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            regions = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion[]{{
                                                                add(new AudioRenderTimelineSpanRegion(877399L, "voluptatem", 3719.19, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                                    beat = 507636L;
                                                                    descriptor = "maxime";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(4152.8, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                                        beat = 3004.03;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                                    }};
                                                                    id = 5207.61;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.DOUBLE_SHARP;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.D;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanRegion(336102L, "sint", 8806.79, AudioRenderTimelineSpanRegionRegionEnum.SILENCE) {{
                                                                    beat = 1383L;
                                                                    descriptor = "quasi";
                                                                    endType = new AudioRenderTimelineSpanRegionEndType(5752.13, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                                        beat = 2476.85;
                                                                        event = AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION;
                                                                        type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                                    }};
                                                                    id = 4585.03;
                                                                    key = new AudioRenderTimelineSpanRegionKey() {{
                                                                        tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.FLAT;
                                                                        tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.F;
                                                                        tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                                    }};
                                                                    region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                                }}),
                                                            }};
                                                            spanType = AudioRenderTimelineSpanSpanTypeEnum.UNMETERED;
                                                            tempo = 900103L;
                                                            tempoChanges = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges[]{{
                                                                add(new AudioRenderTimelineSpanTempoChanges(8953.46, 9661.48) {{
                                                                    tempo = 4043.06;
                                                                    time = 3767.41;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanTempoChanges(6854.78, 6756.89) {{
                                                                    tempo = 650.82;
                                                                    time = 7918.8;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanTempoChanges(5388.69, 2164.57) {{
                                                                    tempo = 2310.7;
                                                                    time = 2448.89;
                                                                }}),
                                                                add(new AudioRenderTimelineSpanTempoChanges(7465.85, 9227.57) {{
                                                                    tempo = 7730.35;
                                                                    time = 1660.47;
                                                                }}),
                                                            }};
                                                            time = 721430L;
                                                        }}),
                                                    }};
                                                }};) {{
                                    filename = "My Project.mp3";
                                    preset = CreateAudioRenderPresetEnum.MASTER_MP3;
                                    timeline = new AudioRenderTimeline() {{
                                        spans = new org.openapis.openapi.models.shared.AudioRenderTimelineSpan[]{{
                                            add(new AudioRenderTimelineSpan(AudioRenderTimelineSpanSpanTypeEnum.METERED, 952143L) {{
                                                id = 9221.12;
                                                instrumentGroups = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup[]{{
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("dicta") {{
                                                        instrumentGroup = "et";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(243.13, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 4059.42;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(6222.31, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 3426.11;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(2097.5, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 2790.68;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("reiciendis") {{
                                                        instrumentGroup = "architecto";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(5390.74, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 2897.76;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(3888.67, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 7241.48;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(4548.6, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 2270.84;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                regions = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion[]{{
                                                    add(new AudioRenderTimelineSpanRegion(29100L, "quisquam", 9195.32, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                        beat = 833819L;
                                                        descriptor = "delectus";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(6964.83, AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                            beat = 9147.91;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                        }};
                                                        id = 6850.92;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.NATURAL;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.G;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanRegion(539118L, "error", 8872.65, AudioRenderTimelineSpanRegionRegionEnum.SILENCE) {{
                                                        beat = 542457L;
                                                        descriptor = "reprehenderit";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(6939.57, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                            beat = 9911.42;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                        }};
                                                        id = 4610.07;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.FLAT;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.A;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.MUSIC;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanRegion(542129L, "atque", 1209.19, AudioRenderTimelineSpanRegionRegionEnum.SILENCE) {{
                                                        beat = 880107L;
                                                        descriptor = "natus";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(9805.81, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT) {{
                                                            beat = 3283.03;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                        }};
                                                        id = 6216.93;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.NATURAL;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.E;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                    }}),
                                                }};
                                                spanType = AudioRenderTimelineSpanSpanTypeEnum.UNMETERED;
                                                tempo = 829898L;
                                                tempoChanges = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges[]{{
                                                    add(new AudioRenderTimelineSpanTempoChanges(9197.83, 1160.98) {{
                                                        tempo = 9682.87;
                                                        time = 429.76;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanTempoChanges(1747.72, 3164.88) {{
                                                        tempo = 360.33;
                                                        time = 1064.29;
                                                    }}),
                                                }};
                                                time = 389135L;
                                            }}),
                                            add(new AudioRenderTimelineSpan(AudioRenderTimelineSpanSpanTypeEnum.METERED, 431785L) {{
                                                id = 5627.83;
                                                instrumentGroups = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup[]{{
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("adipisci") {{
                                                        instrumentGroup = "saepe";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(5979.37, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 5801.07;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("doloremque") {{
                                                        instrumentGroup = "eveniet";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(6611.18, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 1602.3;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(764.86, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 4402.64;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(2473.99, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 6964.63;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                regions = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion[]{{
                                                    add(new AudioRenderTimelineSpanRegion(528940L, "rem", 3044.46, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                        beat = 59944L;
                                                        descriptor = "totam";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(1843.62, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                            beat = 610.78;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                        }};
                                                        id = 8980.63;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.DOUBLE_FLAT;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.G;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanRegion(327988L, "dolore", 6803.49, AudioRenderTimelineSpanRegionRegionEnum.MUSIC) {{
                                                        beat = 997963L;
                                                        descriptor = "alias";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(6490.78, AudioRenderTimelineSpanRegionEndTypeEventEnum.ENDING, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                            beat = 3621.89;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT;
                                                        }};
                                                        id = 9795.27;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.DOUBLE_SHARP;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.D;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                    }}),
                                                }};
                                                spanType = AudioRenderTimelineSpanSpanTypeEnum.METERED;
                                                tempo = 925703L;
                                                tempoChanges = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges[]{{
                                                    add(new AudioRenderTimelineSpanTempoChanges(4032.18, 2840) {{
                                                        tempo = 3092.51;
                                                        time = 4776.46;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanTempoChanges(8906.53, 5145.13) {{
                                                        tempo = 6330.62;
                                                        time = 2384.13;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanTempoChanges(9282.19, 4565.2) {{
                                                        tempo = 4326.06;
                                                        time = 3679.27;
                                                    }}),
                                                }};
                                                time = 592081L;
                                            }}),
                                            add(new AudioRenderTimelineSpan(AudioRenderTimelineSpanSpanTypeEnum.METERED, 619183L) {{
                                                id = 9704.94;
                                                instrumentGroups = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroup[]{{
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("aliquid") {{
                                                        instrumentGroup = "aspernatur";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(3433.92, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 968.04;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(6591.77, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 5910.27;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("tempora") {{
                                                        instrumentGroup = "accusantium";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(4481.43, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 9846.32;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(6720.41, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 9376.36;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(5640.64, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 2666.97;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(1134.86, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE) {{
                                                                beat = 9569.33;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new AudioRenderTimelineSpanInstrumentGroup("velit") {{
                                                        instrumentGroup = "quis";
                                                        statuses = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanInstrumentGroupStatus[]{{
                                                            add(new AudioRenderTimelineSpanInstrumentGroupStatus(626.36, AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.ACTIVE) {{
                                                                beat = 1476.85;
                                                                status = AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum.INACTIVE;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                regions = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanRegion[]{{
                                                    add(new AudioRenderTimelineSpanRegion(589695L, "earum", 7453.98, AudioRenderTimelineSpanRegionRegionEnum.SILENCE) {{
                                                        beat = 432281L;
                                                        descriptor = "eius";
                                                        endType = new AudioRenderTimelineSpanRegionEndType(1794.1, AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION, AudioRenderTimelineSpanRegionEndTypeTypeEnum.RINGOUT) {{
                                                            beat = 5219.96;
                                                            event = AudioRenderTimelineSpanRegionEndTypeEventEnum.TRANSITION;
                                                            type = AudioRenderTimelineSpanRegionEndTypeTypeEnum.CUT;
                                                        }};
                                                        id = 1173.2;
                                                        key = new AudioRenderTimelineSpanRegionKey() {{
                                                            tonicAccidental = AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum.FLAT;
                                                            tonicNote = AudioRenderTimelineSpanRegionKeyTonicNoteEnum.C;
                                                            tonicQuality = AudioRenderTimelineSpanRegionKeyTonicQualityEnum.MAJOR;
                                                        }};
                                                        region = AudioRenderTimelineSpanRegionRegionEnum.SILENCE;
                                                    }}),
                                                }};
                                                spanType = AudioRenderTimelineSpanSpanTypeEnum.UNMETERED;
                                                tempo = 52508L;
                                                tempoChanges = new org.openapis.openapi.models.shared.AudioRenderTimelineSpanTempoChanges[]{{
                                                    add(new AudioRenderTimelineSpanTempoChanges(8918.01, 3998.02) {{
                                                        tempo = 5962.11;
                                                        time = 9834.27;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanTempoChanges(2115.34, 1478.08) {{
                                                        tempo = 7809.31;
                                                        time = 3803.35;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanTempoChanges(1890.62, 6567.62) {{
                                                        tempo = 7649.95;
                                                        time = 6849.35;
                                                    }}),
                                                    add(new AudioRenderTimelineSpanTempoChanges(89.31, 972.58) {{
                                                        tempo = 8987.6;
                                                        time = 8620.63;
                                                    }}),
                                                }};
                                                time = 90233L;
                                            }}),
                                        }};
                                    }};
                                }}),
                            }});            

            CreateAudioRendersResponse res = sdk.customMusic.createAudioRenders(req, new CreateAudioRendersSecurity() {{
                basic = new SchemeBasic("voluptate", "sequi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.audioRendersListResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRenders

This endpoint shows the status of one or more audio renders, including download links for completed audio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRendersRequest;
import org.openapis.openapi.models.operations.FetchRendersResponse;
import org.openapis.openapi.models.operations.FetchRendersSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRendersRequest req = new FetchRendersRequest(                new String[]{{
                                add("neque"),
                                add("quo"),
                            }});            

            FetchRendersResponse res = sdk.customMusic.fetchRenders(req, new FetchRendersSecurity() {{
                basic = new SchemeBasic("deleniti", "quibusdam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.audioRendersListResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomDescriptors

This endpoint lists the descriptors that you can use in the audio regions in an audio render.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomDescriptorsRequest;
import org.openapis.openapi.models.operations.ListCustomDescriptorsResponse;
import org.openapis.openapi.models.operations.ListCustomDescriptorsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCustomDescriptorsRequest req = new ListCustomDescriptorsRequest() {{
                bandId = "iure";
                bandName = "odit";
                id = new String[]{{
                    add("vel"),
                    add("magnam"),
                    add("quibusdam"),
                    add("inventore"),
                }};
                instrumentId = "facere";
                instrumentName = "libero";
                name = "Camille Crist";
                page = 247045L;
                perPage = 75359L;
                renderSpeedOver = 365.61;
                tag = "vel";
                tempo = 4069.22;
                tempoFrom = 1076.17;
                tempoTo = 8777.51;
            }};            

            ListCustomDescriptorsResponse res = sdk.customMusic.listCustomDescriptors(req, new ListCustomDescriptorsSecurity() {{
                basic = new SchemeBasic("excepturi", "eum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.descriptorsListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomInstruments

This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomInstrumentsRequest;
import org.openapis.openapi.models.operations.ListCustomInstrumentsResponse;
import org.openapis.openapi.models.operations.ListCustomInstrumentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCustomInstrumentsRequest req = new ListCustomInstrumentsRequest() {{
                id = new String[]{{
                    add("ut"),
                }};
                name = "Merle Carroll";
                page = 610987L;
                perPage = 932562L;
                tag = "alias";
            }};            

            ListCustomInstrumentsResponse res = sdk.customMusic.listCustomInstruments(req, new ListCustomInstrumentsSecurity() {{
                basic = new SchemeBasic("nisi", "itaque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.instrumentsListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
