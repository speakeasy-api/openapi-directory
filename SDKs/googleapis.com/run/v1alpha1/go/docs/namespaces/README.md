# Namespaces

### Available Operations

* [RunNamespacesJobsCreate](#runnamespacesjobscreate) - Create a job.
* [RunNamespacesJobsDelete](#runnamespacesjobsdelete) - Delete a job.
* [RunNamespacesJobsGet](#runnamespacesjobsget) - Get information about a job.
* [RunNamespacesJobsList](#runnamespacesjobslist) - List jobs.

## RunNamespacesJobsCreate

Create a job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsCreate(ctx, operations.RunNamespacesJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Job: &shared.Job{
            APIVersion: sdk.String("voluptate"),
            Kind: sdk.String("blanditiis"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "voluptas": "numquam",
                    "nemo": "quos",
                    "eius": "aspernatur",
                },
                ClusterName: sdk.String("ducimus"),
                CreationTimestamp: sdk.String("nesciunt"),
                DeletionGracePeriodSeconds: sdk.Int(681740),
                DeletionTimestamp: sdk.String("laudantium"),
                Finalizers: []string{
                    "quasi",
                    "rem",
                },
                GenerateName: sdk.String("fugiat"),
                Generation: sdk.Int(117380),
                Labels: map[string]string{
                    "consequuntur": "consectetur",
                    "aperiam": "cupiditate",
                },
                Name: sdk.String("Dominic Abernathy"),
                Namespace: sdk.String("occaecati"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("magni"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("inventore"),
                        Name: sdk.String("Tomas Wolff"),
                        UID: sdk.String("delectus"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("minima"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("praesentium"),
                        Name: sdk.String("Oscar Smith"),
                        UID: sdk.String("itaque"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("commodi"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("totam"),
                        Name: sdk.String("Edwin Reichert III"),
                        UID: sdk.String("vel"),
                    },
                },
                ResourceVersion: sdk.String("alias"),
                SelfLink: sdk.String("quasi"),
                UID: sdk.String("non"),
            },
            Spec: &shared.JobSpec{
                ActiveDeadlineSeconds: sdk.String("maiores"),
                BackoffLimit: sdk.Int(318233),
                Completions: sdk.Int(575213),
                Parallelism: sdk.Int(858778),
                Template: &shared.InstanceTemplateSpec{
                    Spec: &shared.InstanceSpec{
                        ActiveDeadlineSeconds: sdk.String("deserunt"),
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "reprehenderit",
                                    "est",
                                },
                                Command: []string{
                                    "sint",
                                    "accusamus",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Alonzo Zemlak"),
                                        Value: sdk.String("debitis"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("delectus"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Alexandra Pfannerstill"),
                                                },
                                                Name: sdk.String("Leah Emmerich"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("soluta"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Alton Grimes"),
                                                },
                                                Name: sdk.String("Stella DuBuque"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Brad Conn"),
                                        Value: sdk.String("magnam"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("quibusdam"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Dr. Muriel Reinger"),
                                                },
                                                Name: sdk.String("Mr. Jim Franecki"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("ea"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Leigh Mante"),
                                                },
                                                Name: sdk.String("Miss Katrina Weber"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Bradford Abernathy"),
                                        Value: sdk.String("velit"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("laborum"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Mr. Cindy Kub MD"),
                                                },
                                                Name: sdk.String("Angel Pouros"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("placeat"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Malcolm Lind"),
                                                },
                                                Name: sdk.String("Lindsey Treutel"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Dana Ortiz"),
                                        Value: sdk.String("labore"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("veritatis"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Mrs. Glenn Bruen"),
                                                },
                                                Name: sdk.String("Margarita Jacobson"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("libero"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Omar Kuhlman Sr."),
                                                },
                                                Name: sdk.String("Anna Bergnaum"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Douglas Emard"),
                                            },
                                            Name: sdk.String("Wilbert Crona"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("omnis"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Gerald Ondricka"),
                                            },
                                            Name: sdk.String("Ms. Morris Schulist DVM"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Deborah Larson"),
                                            },
                                            Name: sdk.String("Kenneth Johnson"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("assumenda"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Jodi Schumm"),
                                            },
                                            Name: sdk.String("Sheldon Treutel"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("ea"),
                                ImagePullPolicy: sdk.String("autem"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "rerum",
                                            "laudantium",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(357207),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(889060),
                                        Service: sdk.String("voluptatibus"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("cum"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Rachel Powlowski"),
                                                Value: sdk.String("accusantium"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Erick Dare"),
                                                Value: sdk.String("praesentium"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Judith Herzog"),
                                                Value: sdk.String("adipisci"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Otis Grady"),
                                                Value: sdk.String("beatae"),
                                            },
                                        },
                                        Path: sdk.String("unde"),
                                        Scheme: sdk.String("molestiae"),
                                    },
                                    InitialDelaySeconds: sdk.Int(963198),
                                    PeriodSeconds: sdk.Int(585593),
                                    SuccessThreshold: sdk.Int(147801),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("numquam"),
                                        Port: sdk.Int(256916),
                                    },
                                    TimeoutSeconds: sdk.Int(201010),
                                },
                                Name: sdk.String("Oliver Kulas"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(185518),
                                        Name: sdk.String("Jaime McGlynn"),
                                        Protocol: sdk.String("enim"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(204072),
                                        Name: sdk.String("Sadie Kemmer"),
                                        Protocol: sdk.String("magnam"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "maiores",
                                            "tempore",
                                            "aperiam",
                                            "libero",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(189753),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(289913),
                                        Service: sdk.String("totam"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("occaecati"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Jacob Schinner"),
                                                Value: sdk.String("est"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Brendan Rippin"),
                                                Value: sdk.String("repellat"),
                                            },
                                        },
                                        Path: sdk.String("pariatur"),
                                        Scheme: sdk.String("nemo"),
                                    },
                                    InitialDelaySeconds: sdk.Int(441321),
                                    PeriodSeconds: sdk.Int(45234),
                                    SuccessThreshold: sdk.Int(486410),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("minima"),
                                        Port: sdk.Int(448369),
                                    },
                                    TimeoutSeconds: sdk.Int(496915),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "dolores": "error",
                                        "veritatis": "ducimus",
                                        "voluptate": "pariatur",
                                    },
                                    Requests: map[string]string{
                                        "similique": "optio",
                                        "ex": "quaerat",
                                        "commodi": "officiis",
                                        "placeat": "quidem",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(348192),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "dolorem",
                                            "modi",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(59383),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(575534),
                                        Service: sdk.String("vero"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("sequi"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Willie Wehner"),
                                                Value: sdk.String("dolores"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Gerald Cruickshank"),
                                                Value: sdk.String("ipsa"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Mrs. Elisa Bogisich"),
                                                Value: sdk.String("libero"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Marion Hills"),
                                                Value: sdk.String("doloribus"),
                                            },
                                        },
                                        Path: sdk.String("eligendi"),
                                        Scheme: sdk.String("sint"),
                                    },
                                    InitialDelaySeconds: sdk.Int(314573),
                                    PeriodSeconds: sdk.Int(944950),
                                    SuccessThreshold: sdk.Int(657319),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("quas"),
                                        Port: sdk.Int(517326),
                                    },
                                    TimeoutSeconds: sdk.Int(564667),
                                },
                                TerminationMessagePath: sdk.String("odio"),
                                TerminationMessagePolicy: sdk.String("eaque"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("architecto"),
                                        Name: sdk.String("Nick Shields"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("velit"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("doloremque"),
                                        Name: sdk.String("Edmund Robel"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("saepe"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("deserunt"),
                                        Name: sdk.String("Beatrice Hartmann V"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("molestiae"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("eligendi"),
                                        Name: sdk.String("Kyle Gusikowski"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("asperiores"),
                                    },
                                },
                                WorkingDir: sdk.String("veniam"),
                            },
                            shared.Container{
                                Args: []string{
                                    "facere",
                                },
                                Command: []string{
                                    "odit",
                                    "pariatur",
                                    "amet",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Thelma Purdy"),
                                        Value: sdk.String("voluptatibus"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("quaerat"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Preston Huel"),
                                                },
                                                Name: sdk.String("Roosevelt Schultz"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("ad"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Courtney Crooks"),
                                                },
                                                Name: sdk.String("Craig Kiehn"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Genevieve Lebsack"),
                                        Value: sdk.String("unde"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("officiis"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Carmen Carroll"),
                                                },
                                                Name: sdk.String("Marian Koelpin"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("aspernatur"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Marta Kub"),
                                                },
                                                Name: sdk.String("Virginia Goyette"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Julia Wisozk"),
                                            },
                                            Name: sdk.String("Maurice Zulauf"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("nihil"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Joshua Greenfelder"),
                                            },
                                            Name: sdk.String("Eduardo Larkin DDS"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Candice Rath"),
                                            },
                                            Name: sdk.String("Ira Kulas"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("similique"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Elmer Emard"),
                                            },
                                            Name: sdk.String("Maria Bartoletti I"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Hugh Powlowski"),
                                            },
                                            Name: sdk.String("Dr. Mildred Larkin"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("amet"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Lorenzo Treutel"),
                                            },
                                            Name: sdk.String("Vivian Kreiger"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("corrupti"),
                                ImagePullPolicy: sdk.String("aperiam"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "accusamus",
                                            "eos",
                                            "totam",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(115861),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(30661),
                                        Service: sdk.String("velit"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("dolor"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Curtis McCullough PhD"),
                                                Value: sdk.String("labore"),
                                            },
                                        },
                                        Path: sdk.String("minus"),
                                        Scheme: sdk.String("esse"),
                                    },
                                    InitialDelaySeconds: sdk.Int(32356),
                                    PeriodSeconds: sdk.Int(20950),
                                    SuccessThreshold: sdk.Int(698558),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("ea"),
                                        Port: sdk.Int(46791),
                                    },
                                    TimeoutSeconds: sdk.Int(489459),
                                },
                                Name: sdk.String("Jacob Sawayn"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(490110),
                                        Name: sdk.String("Patty Mraz"),
                                        Protocol: sdk.String("amet"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(948541),
                                        Name: sdk.String("Angelica Waters"),
                                        Protocol: sdk.String("dignissimos"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(876285),
                                        Name: sdk.String("Mr. Edith Zieme"),
                                        Protocol: sdk.String("nihil"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(252700),
                                        Name: sdk.String("Pamela Welch"),
                                        Protocol: sdk.String("non"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "in",
                                            "exercitationem",
                                            "labore",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(254382),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(921193),
                                        Service: sdk.String("modi"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("in"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Ian Baumbach"),
                                                Value: sdk.String("enim"),
                                            },
                                        },
                                        Path: sdk.String("voluptate"),
                                        Scheme: sdk.String("similique"),
                                    },
                                    InitialDelaySeconds: sdk.Int(326118),
                                    PeriodSeconds: sdk.Int(727544),
                                    SuccessThreshold: sdk.Int(300189),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("sit"),
                                        Port: sdk.Int(266788),
                                    },
                                    TimeoutSeconds: sdk.Int(430116),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "mollitia": "dignissimos",
                                    },
                                    Requests: map[string]string{
                                        "nostrum": "molestiae",
                                        "veniam": "reiciendis",
                                        "ab": "modi",
                                        "aut": "aut",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(911657),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "commodi",
                                            "numquam",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(677045),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(823718),
                                        Service: sdk.String("voluptate"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("consectetur"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Miss Patti Schiller"),
                                                Value: sdk.String("quas"),
                                            },
                                        },
                                        Path: sdk.String("et"),
                                        Scheme: sdk.String("facilis"),
                                    },
                                    InitialDelaySeconds: sdk.Int(229276),
                                    PeriodSeconds: sdk.Int(418637),
                                    SuccessThreshold: sdk.Int(685415),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("alias"),
                                        Port: sdk.Int(526413),
                                    },
                                    TimeoutSeconds: sdk.Int(11355),
                                },
                                TerminationMessagePath: sdk.String("quos"),
                                TerminationMessagePolicy: sdk.String("laudantium"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("veritatis"),
                                        Name: sdk.String("Jessica Turner"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("nulla"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("officia"),
                                        Name: sdk.String("Sandra Abbott"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("voluptatem"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("incidunt"),
                                        Name: sdk.String("Phyllis Tremblay Sr."),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("aliquid"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("modi"),
                                        Name: sdk.String("Courtney Maggio"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("totam"),
                                    },
                                },
                                WorkingDir: sdk.String("sequi"),
                            },
                        },
                        RestartPolicy: sdk.String("aliquid"),
                        ServiceAccountName: sdk.String("ea"),
                        TerminationGracePeriodSeconds: sdk.String("impedit"),
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(140957),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("reiciendis"),
                                            Mode: sdk.Int(997918),
                                            Path: sdk.String("nulla"),
                                        },
                                    },
                                    Name: sdk.String("Mrs. Luther Torp"),
                                    Optional: sdk.Bool(false),
                                },
                                Name: sdk.String("Pat Fritsch"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(354225),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("dicta"),
                                            Mode: sdk.Int(973017),
                                            Path: sdk.String("eligendi"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("quae"),
                                            Mode: sdk.Int(885022),
                                            Path: sdk.String("architecto"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("architecto"),
                                            Mode: sdk.Int(317898),
                                            Path: sdk.String("optio"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("rem"),
                                            Mode: sdk.Int(17060),
                                            Path: sdk.String("facilis"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("reiciendis"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(955551),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("dicta"),
                                            Mode: sdk.Int(552439),
                                            Path: sdk.String("ullam"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("dolore"),
                                            Mode: sdk.Int(266284),
                                            Path: sdk.String("itaque"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("maxime"),
                                            Mode: sdk.Int(265905),
                                            Path: sdk.String("consequuntur"),
                                        },
                                    },
                                    Name: sdk.String("Ignacio Wyman"),
                                    Optional: sdk.Bool(false),
                                },
                                Name: sdk.String("Ms. Jimmie Wisozk"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(458412),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("odio"),
                                            Mode: sdk.Int(202796),
                                            Path: sdk.String("debitis"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("vel"),
                                            Mode: sdk.Int(208683),
                                            Path: sdk.String("corporis"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("voluptas"),
                                },
                            },
                        },
                    },
                },
                TTLSecondsAfterFinished: sdk.Int(163684),
            },
            Status: &shared.JobStatus{
                Active: sdk.Int(641133),
                CompletionTime: sdk.String("reprehenderit"),
                Conditions: []shared.JobCondition{
                    shared.JobCondition{
                        LastTransitionTime: sdk.String("eius"),
                        Message: sdk.String("ipsa"),
                        Reason: sdk.String("rem"),
                        Severity: sdk.String("maiores"),
                        Status: sdk.String("accusantium"),
                        Type: sdk.String("veniam"),
                    },
                    shared.JobCondition{
                        LastTransitionTime: sdk.String("saepe"),
                        Message: sdk.String("neque"),
                        Reason: sdk.String("facere"),
                        Severity: sdk.String("aliquam"),
                        Status: sdk.String("quos"),
                        Type: sdk.String("doloribus"),
                    },
                    shared.JobCondition{
                        LastTransitionTime: sdk.String("fugiat"),
                        Message: sdk.String("est"),
                        Reason: sdk.String("delectus"),
                        Severity: sdk.String("velit"),
                        Status: sdk.String("vitae"),
                        Type: sdk.String("nesciunt"),
                    },
                },
                Failed: sdk.Int(630832),
                ImageDigest: sdk.String("illo"),
                Instances: []shared.InstanceStatus{
                    shared.InstanceStatus{
                        CompletionTime: sdk.String("nemo"),
                        Failed: sdk.Int(987890),
                        Index: sdk.Int(823753),
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: sdk.Int(603323),
                            Status: &shared.GoogleRPCStatus{
                                Code: sdk.Int(275425),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "cupiditate": "optio",
                                        "alias": "quidem",
                                    },
                                },
                                Message: sdk.String("nesciunt"),
                            },
                        },
                        LastExitCode: sdk.Int(412433),
                        Restarted: sdk.Int(956124),
                        StartTime: sdk.String("consequuntur"),
                        Succeeded: sdk.Int(330440),
                    },
                    shared.InstanceStatus{
                        CompletionTime: sdk.String("debitis"),
                        Failed: sdk.Int(638390),
                        Index: sdk.Int(575062),
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: sdk.Int(280859),
                            Status: &shared.GoogleRPCStatus{
                                Code: sdk.Int(256768),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "libero": "in",
                                    },
                                    map[string]interface{}{
                                        "ex": "minus",
                                        "ab": "beatae",
                                    },
                                    map[string]interface{}{
                                        "nisi": "quisquam",
                                        "dolor": "ducimus",
                                        "fuga": "minima",
                                        "architecto": "qui",
                                    },
                                    map[string]interface{}{
                                        "magni": "incidunt",
                                        "adipisci": "praesentium",
                                    },
                                },
                                Message: sdk.String("dolor"),
                            },
                        },
                        LastExitCode: sdk.Int(349898),
                        Restarted: sdk.Int(709701),
                        StartTime: sdk.String("facilis"),
                        Succeeded: sdk.Int(769634),
                    },
                    shared.InstanceStatus{
                        CompletionTime: sdk.String("sit"),
                        Failed: sdk.Int(363482),
                        Index: sdk.Int(633987),
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: sdk.Int(159393),
                            Status: &shared.GoogleRPCStatus{
                                Code: sdk.Int(230571),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "veniam": "quod",
                                        "itaque": "a",
                                    },
                                    map[string]interface{}{
                                        "enim": "doloribus",
                                        "assumenda": "officiis",
                                        "architecto": "alias",
                                        "culpa": "ipsa",
                                    },
                                    map[string]interface{}{
                                        "necessitatibus": "quia",
                                        "dicta": "vel",
                                        "perspiciatis": "debitis",
                                        "ullam": "architecto",
                                    },
                                },
                                Message: sdk.String("accusantium"),
                            },
                        },
                        LastExitCode: sdk.Int(18096),
                        Restarted: sdk.Int(82876),
                        StartTime: sdk.String("provident"),
                        Succeeded: sdk.Int(765833),
                    },
                    shared.InstanceStatus{
                        CompletionTime: sdk.String("iure"),
                        Failed: sdk.Int(842402),
                        Index: sdk.Int(798690),
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: sdk.Int(363224),
                            Status: &shared.GoogleRPCStatus{
                                Code: sdk.Int(923456),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "dignissimos": "laboriosam",
                                        "sed": "odio",
                                    },
                                },
                                Message: sdk.String("natus"),
                            },
                        },
                        LastExitCode: sdk.Int(588152),
                        Restarted: sdk.Int(739508),
                        StartTime: sdk.String("doloribus"),
                        Succeeded: sdk.Int(703966),
                    },
                },
                ObservedGeneration: sdk.Int(697330),
                StartTime: sdk.String("itaque"),
                Succeeded: sdk.Int(389548),
            },
        },
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("aspernatur"),
        Parent: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.RunNamespacesJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## RunNamespacesJobsDelete

Delete a job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsDelete(ctx, operations.RunNamespacesJobsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        APIVersion: sdk.String("autem"),
        Callback: sdk.String("quo"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("illum"),
        Kind: sdk.String("nemo"),
        Name: "Johnathan Franey",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        PropagationPolicy: sdk.String("distinctio"),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("facere"),
    }, operations.RunNamespacesJobsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## RunNamespacesJobsGet

Get information about a job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsGet(ctx, operations.RunNamespacesJobsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("ipsam"),
        Name: "Yolanda O'Connell",
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("quo"),
    }, operations.RunNamespacesJobsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## RunNamespacesJobsList

List jobs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsList(ctx, operations.RunNamespacesJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Continue: sdk.String("quaerat"),
        FieldSelector: sdk.String("eligendi"),
        Fields: sdk.String("hic"),
        IncludeUninitialized: sdk.Bool(false),
        Key: sdk.String("nostrum"),
        LabelSelector: sdk.String("officiis"),
        Limit: sdk.Int64(603650),
        OauthToken: sdk.String("nulla"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        ResourceVersion: sdk.String("magnam"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("esse"),
        Watch: sdk.Bool(false),
    }, operations.RunNamespacesJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```
